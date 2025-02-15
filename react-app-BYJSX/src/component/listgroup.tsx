function Listgroup() {
    const items=[
        'new york',
        'san fransisko',
        'london',
        'paris'
    ];

  return (
    <>
        <h1>list</h1>
        <ul className="list-group">
            {items.map((item => <li>{item}</li>))}
        </ul>
    </>
    );
}
export default Listgroup;
