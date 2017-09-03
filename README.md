# websites-docs

> documentation for pms websites api. 
 
## Example
To run example use `npm install` then `npm start`. checkout console in the browser.  
you can change the `base_url` in the [api.js](src/api.js#L2) file.

## Api Url
All api endpoints are following the api url: `/api/v2`

## Api Token
Go to http://propertymanager.guestybookings.com/ 
you will find the website Token on the `window` global in `window.appConfig.token` property.

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

```json
{
  "results": [
    {
      "_id": "558268ad8c44560e018e15fb",
      "accommodates": 4,
      "propertyType": "Apartment",
      "beds": 3,
      "title": "Listing title",
      "publicDescription": {
        "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
        "interactionWithGuests": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
        "houseRules": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
        "notes": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
        "transit": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
        "neighborhood": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
        "access": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
        "space": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique."
      },
      "terms": {
        "cancellation": "strict",
        "maxNights": 1125,
        "minNights": 3
      },
      "picture": {
        "regular": "//regular-picture.jpg",
        "large": "//large-picture.jpg"
      },
      "address": {
        "street": "Street",
        "country": "Country",
        "state": "State",
        "city": "City"
      },
      "accountId": "55b9f9b5393dfe1e000b6c5d",
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "reservation": {
        "basePrice": 229,
        "currency": "EUR",
        "minNights": 3,
        "cleaningFee": 35
      }
    }
  ],
  "title": "Listings Title",
  "count": 1,
  "fields": "_id terms accommodates title beds propertyType address.city address.country address.state address.street publicDescription picture.regular picture.large",
  "limit": 25,
  "skip": 0
}
```

### `GET` /listings/:id
> Retrieve a listing by id
you should pass the following QueryString params:

| Param         | Value         |
| ------------- | ------------- |
| fields        | terms publicDescription prices amenities pictures address.street address.state address.country address.city beds bedrooms title timezone defaultCheckOutTime defaultCheckInTime _id bathrooms accommodates roomType propertyType beds bedrooms  |

```json
{
  "_id": "568268ad8c44560e008e15fb",
  "bathrooms": 1.5,
  "accommodates": 4,
  "roomType": "Entire home/apt",
  "propertyType": "Apartment",
  "beds": 3,
  "bedrooms": 2,
  "timezone": "Europe/Amsterdam",
  "title": "Lorem ipsum dolor sit amet",
  "defaultCheckOutTime": "11:00",
  "defaultCheckInTime": "15:00",
  "accountId": "55b9f9b5393dfe0e004b6c5d",
  "publicDescription": {
    "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
    "interactionWithGuests": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
    "houseRules": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
    "notes": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
    "transit": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
    "neighborhood": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
    "access": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique.",
    "space": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur culpa ea eum explicabo fuga hic id in itaque minus nesciunt praesentium, quaerat, quisquam sapiente sequi tempore voluptate? Similique."
  },
  "terms": {
    "cancellation": "strict",
    "maxNights": 1125,
    "minNights": 3
  },
  "amenities": [
    "Internet",
    "Wireless Internet",
    "..."
  ],
  "pictures": [
    {
      "thumbnail": "//listings/thumbnail.jpg",
      "regular": "//listings/regular.jpg",
      "large": "//listings/large.jpg",
      "original": "//listings/original.jpg",
      "id": 93804279,
      "sort": 1,
      "_id": "58e382a0b59612040050f423"
    },
    {...}
  ],
  "address": {
    "street": "Saffierstraat 112",
    "country": "Netherlands",
    "state": "Noord-Holland",
    "city": "Amsterdam"
  },
  "tags": [
    "A8",
    "B4.2",
    "P150"
  ]
}
```

### `GET` /listings/cities
> Get available cities for listings (city picker). request returns following json:

```json
[
  "Amsterdam",
  "Londen",
  "London",
  "..."
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
