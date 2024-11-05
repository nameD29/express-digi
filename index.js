import express from 'express'

const app = express()

const port = 5000

app.use(express.json())
//get data

app.get("/twitter",(req,res) => {
    res.send("you have do it in short time period")
})

let teaData = []
let nextId = 1


// post data to database
app.post('/teas', (req,res) => {
    const {name,price} = req.body
    const newTea = {id:nextId++,name,price}

    teaData.push(newTea)
    res.status(201).send(newTea)
}) 

app.get('/teas' ,(req,res) => {
    res.status(200).send(teaData)
})

// get data with id
app.get('/teas/:id',(req,res) => {
  teaData.find(tea => tea.id === parseInt(req.params.id))

  if(!tea){
    return res.status(404).send('name not found');
  }
  res.status(200).send(teaData)
})

//update tea- data

app.put('/teas/:id',(req,res) => {
    const tea =  teaData.find(tea => tea.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send('name not found');
      }

      const {name,price} = req.body
      tea.name = name
      tea.price = price
      res.send(200).send(tea)
   

    
})


//delete data

app.delete('/teas/:id',(req,res) => {
   const index = teaData.findIndex(t => t.id === parseInt(req.params.id))

   if(index === -1){
    return res.status(404).send('delete is not found')
   }
   teaData.splice(index,1)

   return res.status(204).send('deleted')
})

app.listen(port, () => {
    console.log(`Server is running at port : ${port}.....`)
})