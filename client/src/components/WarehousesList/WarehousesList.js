import './WarehousesList.scss'
import WarehousesListItem from '../WarehouseListItem/WarehouseListItem'

const WarehousesList = ({ warehouses, warehouseModal, }) => {
    return (
        <div className='warehouse-list'>
            <div className='warehouse-list__categories'>
                <div className='warehouse-list__category-container'>
                    <h5 className='warehouse-list__category warehouse-list__category--warehouses'>WAREHOUSES</h5>
                    <img src='http://localhost:8080/Assets/Icons/sort-24px.svg' alt='sort button' />
                </div>
                <div className='warehouse-list__category-container'>
                    <h5 className='warehouse-list__category warehouse-list__category--address'>ADDRESS</h5>
                    <img src='http://localhost:8080/Assets/Icons/sort-24px.svg' alt='sort button' />
                </div>
                <div className='warehouse-list__category-container'>
                    <h5 className='warehouse-list__category warehouse-list__category--name'>CONTACT NAME</h5>
                    <img src='http://localhost:8080/Assets/Icons/sort-24px.svg' alt='sort button' />
                </div>
                <div className='warehouse-list__category-container'>
                    <h5 className='warehouse-list__category warehouse-list__category--phone'>CONTACT INFORMATION</h5>
                    <img src='http://localhost:8080/Assets/Icons/sort-24px.svg' alt='sort button' />
                </div>
                <div className='warehouse-list__category-container'>
                    <h5 className='warehouse-list__category warehouse-list__category--actions'>ACTIONS</h5>
                </div>
            </div>
            <ul className='warehouse-list__container'>
                {warehouses.map(data => {
                    return (
                        <WarehousesListItem warehouses={data} warehouseModal={warehouseModal} />
                    )
                })}
            </ul>
        </div>

    )
}

export default WarehousesList