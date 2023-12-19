const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// JSX: Javscript XML
//style="background-color: red"; 
const divWeight = (
    <div>
        <div class="row">
            <label style={{ backgroundColor: 'red', color: 'white' }}>Cân nặng:</label>
            <input type="text" value={100} />
            <button className="labelRed labelColor">Tính size quần</button>
        </div>
        <p>fdbsdbsbd</p>
    </div>
);
root.render(divWeight);