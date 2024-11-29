
      import axios from 'axios'
      import { useEffect, useState } from 'react'
      
      const Listarticles = () => {
        const[articles,setArticles]=useState([])
      
        const [isLoading, setIsloading] = useState(true);

        const loadarticles=async()=>{
          try {
            const res=await axios.get("https://laravel-commerce-9ya4.vercel.app/api/api/articles")
            setArticles(res.data)
            setIsloading(false)
          } catch (error) {
            console.log(error)
          }
        }
        useEffect(()=>{
          loadarticles()
        },[])
      const handleDelete=async(id)=>{
        if(window.confirm("êtes vous sure de vouloir supprimer")){
        try {
          await axios.delete(`https://laravel-commerce-9ya4.vercel.app/api/api/articles/${id}`)
          .then(() => {
            setArticles(articles.filter(art=>art.id!=id))
          })
        } catch (error) {
          console.log(error)
        }
      }
      
      }
        return (
          <div>
            <button className='btn btn-success btn-sm'><i className="fa-solid fa-square-plus"></i> Ajouter</button>
          <center> <h1> Liste des articles</h1></center>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Référence</th>
                  <th>Désignation</th>
                  <th>Marque</th>
                  <th>Stock</th>
                  <th>Prix</th>
                  <th>Image</th>
                  <th>Sous catégorie</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {
                articles.map((art,index)=>
                  <tr key={index}>
                    <td>{art.reference}</td>
                    <td>{art.designation}</td>
                    <td>{art.marque}</td>
                    <td>{art.qtestock}</td>
                    <td>{art.prix}</td>
                    <td><img src={art.imageart} width={100} height={100}/></td>
                    <td>{art.scategorieID}</td>
                    <td><button className='btn btn-warning btn-sm'><i className="fa-solid fa-pen-to-square"></i> Update</button></td>
                    <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(art.id)}><i className="fa-solid fa-trash"></i> Delete</button></td>
                    </tr>
                
                )
              }
              </tbody>
            </table>
          </div>
        )
      }
      
      export default Listarticles