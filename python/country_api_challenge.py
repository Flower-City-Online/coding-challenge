import json
from typing import Dict, List, Optional


class CountryFinder:
    """
    Coding Challenge: Implement methods to interact with REST Countries API
    
    The REST Countries API endpoint: https://restcountries.com/v3.1/capital/{capital_name}
    
    Example: https://restcountries.com/v3.1/capital/washington returns country data for United States
    
    Your task:
    1. Implement get_country_by_capital method to call the API
    2. Implement process_response method to extract relevant information
    3. Implement get_user_input method to get capital name from user
    
    Expected output format for process_response:
    {
        "country_name": "United States",
        "official_name": "United States of America", 
        "capital": "Washington, D.C.",
        "region": "Americas",
        "population": 329484123,
        "currencies": ["USD"],
        "languages": ["English"]
    }
    """
    
    def __init__(self):
        """
        Initialize the class with necessary attributes
        """
        pass
    
    def get_country_by_capital(self, capital_name: str) -> Optional[Dict]:
        """
        Call the REST Countries API to get country information by capital name
        
        Args:
            capital_name (str): The capital city name to search for
            
        Returns:
            Optional[Dict]: The API response as a dictionary, or None if request fails
        """
        # TODO: Implement API call to https://restcountries.com/v3.1/capital/{capital_name}
        pass
    
    def process_response(self, api_response: Dict) -> Dict:
        """
        Process the API response and extract relevant information
        
        Args:
            api_response (Dict): The raw API response from REST Countries API
            
        Returns:
            Dict: Processed data with the following structure:
            {
                "country_name": str,
                "official_name": str,
                "capital": str,
                "region": str,
                "population": int,
                "currencies": List[str],
                "languages": List[str]
            }
        """
        # TODO: Extract the relevant information from the API response
        pass
    
    def get_user_input(self) -> str:
        """
        Get capital name input from the user
        
        Returns:
            str: The capital name entered by the user
        """
        # This method is already implemented for you
        print("\n=== Country Information by Capital ===")
        print("Enter a capital city name to get country information")
        print("Examples: London, Paris, Tokyo, Washington")
        print("-" * 50)
        
        while True:
            capital_name = input("Enter capital city name: ").strip()
            if capital_name:
                return capital_name
            else:
                print("Please enter a valid capital city name.")
    

    
    def display_result(self, country_data: Dict) -> None:
        """
        Display the country information in a formatted way
        
        Args:
            country_data (Dict): The processed country data
        """
        if not country_data:
            print("No country data to display.")
            return
            
        print("\n" + "=" * 50)
        print("COUNTRY INFORMATION")
        print("=" * 50)
        print(f"Country Name: {country_data.get('country_name', 'N/A')}")
        print(f"Official Name: {country_data.get('official_name', 'N/A')}")
        print(f"Capital: {country_data.get('capital', 'N/A')}")
        print(f"Region: {country_data.get('region', 'N/A')}")
        print(f"Population: {country_data.get('population', 'N/A'):,}")
        print(f"Currencies: {', '.join(country_data.get('currencies', []))}")
        print(f"Languages: {', '.join(country_data.get('languages', []))}")
        print("=" * 50)
    
    def run(self):
        """
        Main method to run the complete workflow
        """
        try:
            # Get user input
            capital_name = self.get_user_input()
            
            # Get country data from API
            print(f"\nFetching information for capital: {capital_name}")
            api_response = self.get_country_by_capital(capital_name)
            
            if api_response:
                # Process the response
                processed_data = self.process_response(api_response)
                
                # Display the result
                self.display_result(processed_data)
            else:
                print(f"No country found for capital: {capital_name}")
                
        except Exception as e:
            print(f"An error occurred: {str(e)}")


def main():
    """
    Main function to run the coding challenge
    """
    # Create instance and run
    country_finder = DummyClass()
    country_finder.run()


if __name__ == "__main__":
    main() 