import client from '@sanity/client'

export default client({
    projectId: "mr5wnv0b",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-02-04"
})