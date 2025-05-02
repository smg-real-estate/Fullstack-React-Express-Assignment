# README

## Backend Challenges

## Setup

```bash
yarn docker-build
yarn docker-run
```

## Instructions

This is a TypeScript React project. Complete the following challenges. There is no particular order for the following challenges

```mermaid
graph TD;
    1A;
    1B;
    2;
```

## Challenges

1. Pagination

    1A. JSON Pagination
      - The endpoint `/listings` returns a JSON that is not paginated.
      - Modify the endpoint so that it accepts the parameters:
        - `page`: default 1
        - `pageSize`: default 5
        and returns the data in the format:
        - `{ page: 1, pageSize: 5, data: [...] }`

    1B. JSON Sorting
      - The endpoint `/listings` returns a JSON that is sorted just by id.
      - Modify the endpoint so that it accepts the parameters:
        - `sortBy`: one of `title`, `id`. default `id`
        - `sortDirection`: either `asc` or `desc`. default `asc`
        and returns the data in the format:
        - `{ page: 1, pageSize: 5, data: [...] }`

2. _"Pictures of You"_

- The endpoint `/listings/{:id}` returns the details for each listing.
- To reduce number of requests, the endpoint cached the pictures in the local
  assets folder.
- However the code to convert pictures to Base64 is not working.
  Can you fix it?
  What is the code doing?
