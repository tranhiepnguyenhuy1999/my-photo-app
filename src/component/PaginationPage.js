import React from 'react'
import {Pagination, Row} from 'react-bootstrap'
function PaginationPage({pages, changePage, pageCur}) {
    const pagesNumber=[]
    for(let i=1; i<=pages; i++)
    {
        pagesNumber.push(i)
    }
    return (
        <Row  className='mb-3 justify-content-center'>
            <Pagination>
                <Pagination.First disabled={pageCur===1} onClick={()=>changePage(1)}/>
                <Pagination.Prev disabled={pageCur===1} onClick={()=>changePage(pageCur-1)}/>
                {pagesNumber.map(page=><Pagination.Item onClick={()=>changePage(page)}>{page}</Pagination.Item>)}          
                <Pagination.Next disabled={pageCur===pages} onClick={()=>changePage(pageCur+1)}/>
                <Pagination.Last disabled={pageCur===pages} onClick={()=>changePage(pages)}/>
            </Pagination>
        </Row>
    )
}

export default PaginationPage
