// Import the framework and instantiate it
import Fastify from 'fastify'
const PORT = 9847
const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { address: [
    {
        route: "/address",
        method: "GET",
        description: "Get a list of addresses",
        example: [
          {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
            country: "USA"
          }
        ]
    },
    {
        route: "/confirmAddress",
        method: "POST",
        description: "Confirm an address",
        example: "true or false",
        body: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zip: "12345",
          country: "USA"
        },
        throws: {
            error: "400 - All fields are required"
        }
    }
  ]}
})

// Declare a route
fastify.get('/address', async function handler (request, reply) {
  return [
    {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "USA"
    },
    {
      street: "456 Oak Ave",
      city: "Springfield",
      state: "IL",
      zip: "62704",
      country: "USA"
    },
    {
      street: "789 Maple Dr",
      city: "Centerville",
      state: "TX",
      zip: "75833",
      country: "USA"
    },
    {
      street: "321 Elm St",
      city: "Greenville",
      state: "SC",
      zip: "29601",
      country: "USA"
    },
    {
      street: "135 Pine Rd",
      city: "Hometown",
      state: "FL",
      zip: "32003",
      country: "USA"
    },
    {
      street: "246 Cedar Ln",
      city: "Lakeview",
      state: "MN",
      zip: "55044",
      country: "USA"
    },
    {
      street: "579 Birch Blvd",
      city: "Rivertown",
      state: "WA",
      zip: "98001",
      country: "USA"
    },
    {
      street: "864 Willow Way",
      city: "Brookfield",
      state: "WI",
      zip: "53005",
      country: "USA"
    },
    {
      street: "910 Aspen Ct",
      city: "Mountain View",
      state: "CO",
      zip: "80439",
      country: "USA"
    },
    {
      street: "112 Cherry St",
      city: "Sunnyvale",
      state: "CA",
      zip: "94086",
      country: "USA"
    }
  ]
  
})

fastify.post('/confirmAddress', async function handler (request, reply) {
  const { street, city, state, zip, country } = request.body
  if (!street || !city || !state || !zip || !country) {
    return reply.status(400).send({ error: 'All fields are required' })
  }
  return {
    message: Math.random() > 0.15 ? true : false,
  }
})

// Run the server!
try {
  await fastify.listen({ port: PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}