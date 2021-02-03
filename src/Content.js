import {
    useState
} from 'react'
export function Tambah() {
    return <form action=''>
        <input type="text" placeholder="Andress Wallet" />
        <input type="text" placeholder="email" />
        <button type="submit">Tambahkan</button>
    </form>
}
export function List() {
    const data = [
        []
        ['MFJvJQ8dF5wHt2uYG5qFRhxSZwbtqezgYe',
            'rzackfs@gmail.com'],
        ['MBdrTp7DqTFQVFaWDUqs8j27T7BLdWdNNW',
            'fristtuyul@gmail.com']
    ],
    off = e=> {
        e.target.parentNode.parentNode.remove()
    }
    
    return <div className="container">
    <table border="1" style={{
        marginBottom: "30px",
        width: "auto"
    }}>
        {data.map((value, index)=><tr key={index}>
            <td><input type="text" value={value[0]} /></td>
            <td><input type="text" value={value[1]} /></td>
            <td><a href="https://ltcminer.com"
                onClick={off}
                data={index}
                target="_blank"
                rel="noreferrer">visit</a></td>
        </tr>)}
    </table>
    </div>
}