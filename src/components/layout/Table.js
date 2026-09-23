import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

import styles from './Table.module.css';

function Table({ columns, data, onEdit, onDelete, showActions = true }) {
    return (
        <div className={styles.table_container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.accessor}>{col.header}</th>
                        ))}
                        {showActions && <th>Ações</th> }
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            {columns.map((col) => (
                                <td key={col.accessor}>
                                    {col.render ? col.render(row) : row[col.accessor]}
                                </td>
                            ))}
                            {showActions && (
                            <td>
                                <button
                                    className={styles.edit_btn}
                                    onClick={() => onEdit(row)}
                                >
                                    <BsPencil />
                                </button>
                                <button
                                    className={styles.delete_btn}
                                    onClick={() => onDelete(row)}
                                >
                                    <BsFillTrashFill />
                                </button>
                            </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
