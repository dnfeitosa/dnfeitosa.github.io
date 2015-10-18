require 'json'
require 'fileutils'
require 'awesome_print'

def to_id(value)
  value.gsub(/[^a-zA-Z0-9]/, '-').downcase
end

category_name = ARGV[0]
lines = File.readlines("#{category_name}.tsv")

category = {
  id: category_name,
  subcategories: [],
  promotions: []
}
subcategory = nil
lines.drop(1).collect do |line|
  columns = line.split("\t")

  if columns[0].strip.empty?
    next
  end

  if columns[2].empty?
    name = columns[0]
    subcategory = { 
      id: to_id(name),
      name: name, products: [], promotions: [] 
    }
    category[:subcategories] << subcategory
    next
  end

  if subcategory[:id] == 'promos'
    price = columns[0]
    products = columns.drop(1)
    category[:promotions] << {
      price: price.to_f,
      products: products.select { |p| not p.strip.empty? }.collect { |p| to_id(p) }
    }
  else
    name, price, image_url, description, listed, available = columns
    subcategory[:products] << {
      id: to_id(name),
      name: name,
      price: price.gsub(/,/, '').to_f,
      image: image_url.split('/').last,
      description: description,
      available: "Sim" == available
    }
  end
end

puts "Generating data file for '#{category_name}'"

FileUtils.mkdir_p("./data") unless File.exists?("./data")

file_name = "./data/#{category_name}.json"
FileUtils.rm(file_name) if File.exists?(file_name)

file = File.new(file_name, 'w+')
ap category
data = JSON.pretty_generate(category)
file.write data
file.close
=begin
subcategories.each do |subcategory|
  puts "Generating data file for '#{category_name}->#{subcategory[:id]}'"

  category_dir = "./data/#{category_name}"
  FileUtils.mkdir_p(category_dir) unless File.exists?(category_dir)
  file_name = "#{category_dir}/#{subcategory[:id]}.json"
  FileUtils.rm(file_name) if File.exists?(file_name)

  file = File.new(file_name, 'w+')
  file.write JSON.pretty_generate(subcategory)
  file.close
end
=end
