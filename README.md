# websites-docs

> documentation for pms websites api

## Api Url
all api endpoints are following the api url: `/api/v2`

## Api Token
you will find the website Token on the `window` global in `window.Token` property.

all request should add `Authorization` header as the following:

```
Authoriztion: Bearer (website Token string)
```

## Api End-Points

### `GET` /websites
> information about website configurtion, sections and section types  
the request returns the following json:

```json
{
  "title": "BnbManager",
  "pic": "https://cdn.filepicker.io/api/file/AlWFuVc2SJ2WZnifpgp5",
  "logo": "https://cdn.filepicker.io/api/file/QYlJ9dOS7Kj4sSsTGwrj",
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

> section data by section type ie: INFO, SERVICES, CONTACT.  
a request to retrieve the info section `/websites/info` returns the following json:

```json
{
  "_id": "592acbbbd491e69c0539da59",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
  "title": "About Us"
}
```

### `GET` /listings
> retrieve all active and listed listings  
you should pass the following QueryString Params:

| Param         | Value         |
| ------------- | ------------- |
| active        | true          |
| listed        | true          |
| fields        | _id terms accommodates title beds propertyType address.city address.country address.state address.street publicDescription picture.regular picture.large  |

### `GET` /listings/:id
> retrieve a listing by id
you should pass the following QueryString params:

| Param         | Value         |
| ------------- | ------------- |
| fields        | terms publicDescription prices amenities pictures address.street address.state address.country address.city beds bedrooms title timezone defaultCheckOutTime defaultCheckInTime _id bathrooms accommodates roomType propertyType beds bedrooms  |

### `GET` /listings/cities
> get available cities for listings (city picker). request returns following json:

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

> sends an email from the contact form. should send the following payload:

```json
{
	"name": "fullName",
	"email": "email",
  	"subject": "subject",
  	"message": "message"
}
```

### `POST` /reservations/create

> create reservation from booking form. should send the following payload:

```json
{
	"name": "fullName",
	"email": "email",
  	"subject": "subject",
  	"message": "message",
	"credit-card": "creditCard"
}
```