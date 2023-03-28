const showList = () => {
  const html = `
    <main id="toDo">
        <div class="title">
            <h3>Today's To Do</h3>
            <button class="bnt-refresh">R</button>
        </div>
        <div class="WriteList">
            <input type="text" class="write" placeholder="Add to your list">
        </div>
        <div class="WriteList">
            <div class="WriteList">
                <input type="checkbox" class="selectList" value="futureKeys">
                <input type="text" class="write" readonly value="FutureKey">
            </div>
            <div class="treeDot">
                <p>:</p>
            </div>
            
        </div>
    </main>
    `;
  document.body.innerHTML = html;
};

document.body.onload = showList();
