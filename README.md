# Metric Imperial Converter
This is a simple api that helps to convert metric unit to imperial unit and vice versa.

## Installation
1. clone the repo
2. go to project directory and run:  
npm install
3. npm start

## How to use
Converting is very simple. Just call the api with the input query.

Valid input query:
```shell script
/api/convert?input=4gal
/api/convert?input=1/2km
/api/convert?input=5.4/3lbs
/api/convert?input=kg
```
For e.g:

**/api/convert?input=2kg**

Should return:
```shell script
  {
    "initNum": 2,
    "initUnit": "kg",
    "returnNum": 4.40924,
    "returnUnit": "lbs",
    "string": "2 kilograms converts to 4.40924 pounds"
}
```

In the case of invalid number or unit or both, response will include the corresponding error:
```shell script
{
  "error": "invalid number and unit"
}
```