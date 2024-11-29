import axios from 'axios'
import ReactLoading from 'react-loading'
import  {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Listearticlecard = () => {
  const [articles, setArticles] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPagesize] = useState(18); 
  const [totalpages, setTotalpages] = useState(1);
   
  const fetchArticles = async (pageSize,page) => {
    try {
        console.log(res.data)
      const res = await axios.get(`https://laravel-commerce-9ya4.vercel.app/api/api/articles/art/articlespaginate?pageSize=${pageSize}&page=${page}`)  
      setArticles(res.data.products)
      setTotalpages(res.data.totalPages)
      setIsloading(false)

    }
    catch (error) {
      console.log(error)
    }}
  const handleDelete = async (id) => {
    try {
      if (window.confirm('Voulez-vous vraiment supprimer cet article?')) {  
      const res = await axios.delete(`https://laravel-commerce-9ya4.vercel.app/api/api/articles/${id}`)
      setArticles(articles.filter((cat) => cat.id !== id))
      console.log(res.data)
      fetchArticles()}
    }
    catch (error) {
      console.log(error)
    } } 
    useEffect(() => {
      fetchArticles(pageSize,currentPage);
    }, [pageSize,currentPage]);
    if (isloading) {
      return (
        <center>
          <ReactLoading type="spinningBubbles" color="red" height={667} width={375} />
        </center>
      );
    }
    return (
      
      <div>
        <Link to="/articles/add"><button className='btn btn-primary btn-sm'>Ajouter un article</button></Link>
        
      <h2>Liste des articles </h2>
      <table className='table table table-striped'>
      <thead>
      <tr>
      <td>reference</td>
      <td>designation</td>
      <td>Marque</td>
      <td>Prix</td>
      <td>Stock</td>
      <td>Image</td>
      <td>Update</td>
      <td>Delete</td>
      </tr>
      </thead>
      <tbody>
      { articles &&
      articles.map((cat,index) =>
      <tr key={index}>

      <td>{cat.reference}</td>
      <td>{cat.designation}</td>
      <td>{cat.marque}</td>
      <td>{cat.prix}</td>
      <td>{cat.qtestock}</td>
      <td><img src ={cat.imageart} width={80} height={80}/></td>
      <td><Link to ={`/article/edit/${cat.id}`}><button className='btn btn-warning btn-sm'>Update</button></Link></td>
      <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(cat.id)}>Delete</button></td>
      </tr>
      
      )
      }
      </tbody>
      
      </table>
      </div>
      )
      }
      export default Listearticlecard
 