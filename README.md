# websites-docs

> documentation for pms websites api. 
 
## Example
To run example use `npm install` then `npm start`. checkout console in the browser.  
you can change the `base_url` in the [api.js](src/api.js#L2) file.

## Api Url
All api endpoints are following the api url: `/api/v2`

## Api Token
You will find the website Token on the `window` global in `window.Token` property.

All requests should add `Authorization` header as the following:

```
Authoriztion: Bearer (website Token string)
```

## Api End-Points

### `GET` /websites
> Information about website configuration, sections and section types  
the request returns the following json:

```json
{
  "title": "Website Title",
  "pic": "path/to/image.png",
  "logo": "path/to/image.png",
  "defaultStatusForNewReservations": "inquiry",
  "maxGuests": 4,
  "defaultSort": "title",
  "includedListings": [
    "568268ad8c44560e008e15fb"
  ],
  "excludedListings": [],
  "sections": [
    {
      "name": "About",
      "type": "INFO"
    },
    {
      "name": "Services",
      "type": "SERVICES"
    },
    {
      "name": "Contact",
      "type": "CONTACT"
    }
  ]
}
```

### `GET` /websites/:section

> Section data by section type ie: INFO, SERVICES, CONTACT.  
a request to retrieve the info section `/websites/info` returns the following json:

```json
{
  "_id": "592acbbbd491e69c0539da59",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
  "title": "About Us"
}
```

### `GET` /listings
> Retrieve all active and listed listings  
you should pass the following QueryString Params:

| Param         | Value         |
| ------------- | ------------- |
| active        | true          |
| listed        | true          |
| fields        | _id terms accommodates title beds propertyType address.city address.country address.state address.street publicDescription picture.regular picture.large  |

### `GET` /listings/:id
> Retrieve a listing by id
you should pass the following QueryString params:

| Param         | Value         |
| ------------- | ------------- |
| fields        | terms publicDescription prices amenities pictures address.street address.state address.country address.city beds bedrooms title timezone defaultCheckOutTime defaultCheckInTime _id bathrooms accommodates roomType propertyType beds bedrooms  |

### `GET` /listings/cities
> Get available cities for listings (city picker). request returns following json:

```json
[
  "Amsterdam",
  "Londen",
  "London",
  "Willemstad",
  "Laag Zuthem",
  "Bussum",
  "New York",
  "Cusco",
  "Rotterdam",
  "Haarlem",
  "Amsterdam-Zuidoost",
  "Utrecht",
  "The Hague",
  "1054 Amsterdam",
  "San Francisco",
  "Embry",
  "Newton"
]
```

### `POST` /contact

> Sends an email from the contact form. should send the following payload:

```json
{
	"name": "fullName",
	"email": "email",
  	"subject": "subject",
  	"message": "message"
}
```

### `POST` /reservations/create

> Create reservation from booking form. should send the following payload:

```json
{
	"name": "fullName",
	"email": "email",
  	"subject": "subject",
  	"message": "message",
	"credit-card": "creditCard"
}
```
