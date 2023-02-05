# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!
# TODO: solve with Sobert if it throws an errors
Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true
