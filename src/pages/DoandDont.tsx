import Layout from './Layout'

export default function DoandDont(){
    return (
        <Layout page="Dos and Don'ts">
            <div className='container-fluid'>
                <div className='important px-3 fs-1'>
                    <i className='bi bi-check-square-fill'></i>
                    <span className='m-3'>Dos</span>
                </div>
                <ul className='fs-4'>
                    <li>Light exercises such as slow walking, yoga, stretching, etc.</li>
                    <li>Low-intensity chores: dusting, dishes, etc.</li>
                    <li>Eat lightly-spiced foods</li>
                </ul>
            </div>
            <div className='container-fluid'>
                <div className='important px-3 fs-1'>
                    <i className='bi bi-x-square-fill'></i>
                    <span className='m-3'>Don'ts</span>
                </div>
                <ul className='fs-4'>
                    <li>Intensive exercises such as jogging, weight-lifting, etc.</li>
                    <li>Intensive chores: heavy laundry, deep cleaning, etc.</li>
                    <li>Eat spicy foods</li>
                    <li>Drive long distances ({'>'} 1 mi)</li>
                </ul>
            </div>
        </Layout>
    );
}