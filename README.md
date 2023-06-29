# Summary

This project consists of a NodeJS and Docker application using Express, GraphQL, Mongoose dependencies.

We only have one model in the database: Fruit, so we only have one resolver that will handle creating a fruit, editing, removing, listing all of them, and a specific one.

To run this project is simple, just install Docker and run the command:

```
docker-compose up
```

Or detached

```
docker-compose up -d
```

## GraphQL Querys/Mutations examples

- **Getting all fruits:**
        query getFruits {
            fruits {
                id
                name
                nutritions {
                    sugar
                    calories
                }
            }
        }

#

- **Get specific fruit:**

        query fruit($id: ID!) {
            fruit(id: $id) {
                id
                name
                nutritions {
                    sugar
                    calories
                }
            }
        }

  - **Query Variables**:

          {
              "id": "649cf3f7bd4eb8b976f7a127"
          }

#

- **Creating a fruit:**

        mutation createFruit(
            $fruit: CreateFruitInput!
        ) {
            createFruit(fruit: $fruit) {
                name
                nutritions {
                    sugar
                    calories
                }
            }
        }

  - **Query Variables**:

          {
              "fruit": {
                  "name": "Apple",
                  "nutritions": {
                      "sugar": "2.3",
                      "calories": "20"
                  }
              }
          }

#

- **Updating a fruit:**

        mutation updateFruit($fruit: UpdateFruitInput!) {
            updateFruit(fruit: $fruit) {
                id
                name
                nutritions {
                    sugar
                    calories
                }
            }
        }

  - **Query Variables**:

          {
              "fruit": {
                  "id": "649cf3f7bd4eb8b976f7a129",
                  "name": "Apple-Updated",
                  "nutritions": {
                      "sugar": "5",
                      "calories": "25"
                  }
              }
          }

#

- **Deleting a fruit:**

        mutation deleteFruit($id: String!) {
            deleteFruit(id: $id) {
                id
                name
                nutritions {
                    sugar
                    calories
                }
            }
        }

  - **Query Variables**:

          {
              "id": "649cf3f7bd4eb8b976f7a129"
          }
