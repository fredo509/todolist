const showList = () => {
  const html = `
    <main id="toDo">
        <div class="title">
            <h3>Today's To Do</h3>
            <button class="btn-refresh"></button>
        </div>
        <div class="WriteList">
            <input type="text" class="write" placeholder="Add to your list"><button class="btn-Add"></button>
        </div>
        <div class="lg" id="listItem">
           
        </div>
         <button class="clean">Clean all completed </button>
    </main>
    `;
  document.body.innerHTML = html;
};

export default showList;