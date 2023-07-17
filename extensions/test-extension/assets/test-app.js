window.onload = async () => {
  let req = await fetch('https://reqres.in/api/users?page=1');
  res = await req.json();

  var reviews = res.data;
  var html = '';
  reviews.forEach(review => {
    html += `<div>
        <h4>${review.first_name} ${review.last_name}</h4>
        <div style="display:flex;">
          <img src="${review.avatar}" style="width:75px;heigh:75px;margin-right:1rem;" />
          <span>Some fake review people!!. This is just test data. Nothing to see here. Move on.</span>
        </div>
      </div>`
  });
  document.getElementById('reviewsContainer').innerHTML = html;
};
