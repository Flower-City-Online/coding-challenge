# Python Coding Challenge: REST Countries API

## Overview
This coding challenge tests your ability to work with external APIs, handle JSON responses, and implement object-oriented programming concepts in Python.

## Challenge Description
You need to implement a `DummyClass` that interacts with the [REST Countries API](https://restcountries.com/v3.1/capital/{capital_name}) to retrieve country information based on a capital city name.

## API Endpoint
- **URL**: `https://restcountries.com/v3.1/capital/{capital_name}`
- **Method**: GET
- **Example**: `https://restcountries.com/v3.1/capital/washington` returns data for United States

## Requirements

### 1. Implement `__init__` method
Initialize the class with necessary attributes.

### 2. Implement `get_country_by_capital` method
- Make HTTP GET request to the REST Countries API
- Handle potential errors (network issues, invalid capital, etc.)
- Return the API response as a dictionary or None if request fails

### 3. Implement `process_response` method
Extract and format relevant information from the API response. The method should return a dictionary with the following structure:

```python
{
    "country_name": "United States",
    "official_name": "United States of America",
    "capital": "Washington, D.C.", 
    "region": "Americas",
    "population": 329484123,
    "currencies": ["USD"],
    "languages": ["English"]
}
```

### 4. Test Cases
The `get_user_input` method is already implemented. Test your implementation with various capital cities:
- London
- Paris
- Tokyo
- Washington
- Berlin
- Madrid
- Ottawa

## Expected Output
When you run the program and enter "Washington", you should see output similar to:

```
==================================================
COUNTRY INFORMATION
==================================================
Country Name: United States
Official Name: United States of America
Capital: Washington, D.C.
Region: Americas
Population: 329,484,123
Currencies: USD
Languages: English
==================================================
```