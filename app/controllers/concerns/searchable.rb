# frozen_string_literal: true

# Provides search functionality for listings. This module is included in
# the ListingsController. Based on search term and search filter, the
# appropriate search method is called. search_by_term returns either Array
# of listings or Array of search suggestions. Both search results
# provided based on saerch term and search_filter.
#
# If we pass down search_filter search_by_term will return Array of
# listings. If we pass down nil value as search_filter method return
# Array of search suggestions.
module Searchable
  extend ActiveSupport::Concern

  # Search by term and search filter
  # Return Array of listings or Array of search suggestions
  def search_by_term(term, search_filter, search_str)
    case term
    when 'state'
      search_by_state(search_filter, search_str)
    when 'city'
      search_by_city(search_filter, search_str)
    when 'zipcode'
      search_by_zipcode(search_filter, search_str)
    when 'streetAddress'
      search_by_street_address(search_filter, search_str)
    end
  end

  def search_by_state(search_filter, search_str)
    if search_filter == 'listings'
      @listings = Listing.searchByCityState(search_str, 'state')
      render 'api/listings/index'
    else
      states = Listing.getSuggestionsByState(search_str, 'state')
      render 'api/listings/search_suggestions', locals: { states: states }
    end
  end

  def search_by_city(search_filter, search_str)
    if search_filter == 'listings'
      @listings = Listing.searchByCityState(search_str, 'city')
      render 'api/listings/index'
    else
      cities_states = Listing.getSuggestionsByCity(search_str)
      render 'api/listings/search_suggestions', locals: { states: cities_states }
    end
  end

  def search_by_zipcode(search_filter, search_str)
    if search_filter == 'listings'
      @listings = Listing.searchByCityState(search_str, 'zipcode')
      render 'api/listings/index'
    else
      zipcode = Listing.getSuggestionsByZipCode(search_str)
      render 'api/listings/search_suggestions', locals: { states: zipcode }
    end
  end

  def search_by_street_address(search_filter, search_str)
    if search_filter == 'listings'
      @listings = Listing.searchByCityState(search_str, 'address')
      render 'api/listings/index'
    else
      suggestions = Listing.getSuggestionsByAddress(search_str)
      render 'api/listings/search_suggestions', locals: { states: suggestions }
    end
  end
end
