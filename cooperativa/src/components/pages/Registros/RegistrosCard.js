// import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

import styles from './RegistrosCard.module.css';

function RegistrosCard({ records, handleRemove }) {
    return (
        <div className={styles.table_container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr key={record.id}>
                            <td>{record.category.id}</td>
                            <td>{record.category.name}</td>
                            <td>{record.quantidade}</td>
                            <td>{record.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RegistrosCard