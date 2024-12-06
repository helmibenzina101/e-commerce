import PropTypes from 'prop-types';

const Pagination =
({handlePrevPage,handleNextPage,handlePageChange,totalPages,currentPage })=> {
return (
<div className="pagination">
{/* Pagination controls */}
<button onClick={()=>handlePrevPage()} disabled={currentPage === 1}

>
Previous
</button>

{Array.from({ length: totalPages }, (_, index) => (
<button

key={index}
onClick={() => handlePageChange(index + 1)}
disabled={currentPage === index + 1}
className={currentPage === index + 1 ? 'page-link active' : ''}



>
{index + 1}
</button>
))}

<button onClick={()=>handleNextPage()} disabled={currentPage ===
totalPages}>

Next
</button>
</div>

)
}
Pagination.propTypes = {
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination
