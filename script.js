$.getJSON(
  "https://www.themealdb.com/api/json/v1/1/categories.php",
  function (data) {
    let menu = data.categories;
    $.each(menu, function (index, data) {
      $("#daftar-menu").append(
        '<div class="col-md-4 mx-auto d-flex justify-content-center"><div class="card mb-3" style="width: 18rem;"><img src=" ' +
          data.strCategoryThumb +
          ' " class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title"> ' +
          data.strCategory +
          '</h5><p class="card-text text-truncate"> ' +
          data.strCategoryDescription +
          '</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
      );
    });
    console.log(menu);
  }
);
