document.getElementById("stats-view").hidden = true;

function searchPlayer() {
  var tagName = document.getElementById('playerTag').value;
  $.getJSON( "https://fortnite-public-api.theapinetwork.com/prod09/users/id?username="+tagName, function(response) {
  var uid = response.uid;
    $.getJSON( "https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id="+ uid +"&platform=pc", function(response) {
        console.log(response);
        $('#username_stats').text(response.username);
        $('#platform_stats').text(response.platform);
        // All-round
        $('#hoursplayed_stats').text(response.totals.hoursplayed);
        $('#kd_stats').text(response.totals.kd);
        $('#kills_stats').text(response.totals.kills);
        $('#matchsplayed_stats').text(response.totals.matchesplayed);
        $('#score_stats').text(response.totals.score);
        $('#winrate_stats').text(response.totals.winrate)
        $('#wins_stats').text(response.totals.wins);
        $('#uid_stats').text(response.uid);
        //Solo
        $('#kd_solo').text(response.stats.kd_solo);
        $('#kills_solo').text(response.stats.kills_solo);
        $('#matchesplayed_solo').text(response.stats.matchesplayed_solo);
        $('#placetop1_solo').text(response.stats.placetop1_solo);
        $('#placetop10_solo').text(response.stats.placetop10_solo);
        $('#placetop25_solo').text(response.stats.placetop25_solo);
        $('#score_solo').text(response.stats.score_solo);
        $('#winrate_solo').text(response.stats.winrate_solo);
        //Duo
        $('#kd_duo').text(response.stats.kd_duo);
        $('#kills_duo').text(response.stats.kills_duo);
        $('#matchesplayed_duo').text(response.stats.matchesplayed_duo);
        $('#placetop1_duo').text(response.stats.placetop1_duo);
        $('#placetop5_duo').text(response.stats.placetop5_duo);
        $('#placetop12_duo').text(response.stats.placetop12_duo);
        $('#score_duo').text(response.stats.score_duo);
        $('#winrate_duo').text(response.stats.winrate_duo);
        //Squad
        $('#kd_squad').text(response.stats.kd_squad);
        $('#kills_squad').text(response.stats.kills_squad);
        $('#matchesplayed_squad').text(response.stats.matchesplayed_squad);
        $('#placetop1_squad').text(response.stats.placetop1_squad);
        $('#placetop3_squad').text(response.stats.placetop3_squad);
        $('#placetop6_squad').text(response.stats.placetop6_squad);
        $('#score_squad').text(response.stats.score_squad);
        $('#winrate_squad').text(response.stats.winrate_squad);
        document.getElementById("stats-view").hidden = false;
        document.getElementById("daily-shop").hidden = true;
        $('#stats-view').addClass('animated slideInLeft');
        
    });
  });
};

$.ajax({
  url: 'https://fortnite-public-api.theapinetwork.com/prod09/store/get',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  // Shop Date 
  $('#shop_date').text(response.date)
  // Shop 
  imageurl1 = response.items[0].item.images.information;
  $('#image_item_0').attr('src', imageurl1);

  imageurl2 = response.items[1].item.images.information;
  $('#image_item_1').attr('src', imageurl2);

  imageurl3 = response.items[2].item.images.information;
  $('#image_item_2').attr('src', imageurl3);

  imageurl4 = response.items[3].item.images.information;
  $('#image_item_3').attr('src', imageurl4);

  imageurl5 = response.items[4].item.images.information;
  $('#image_item_4').attr('src', imageurl5);

  imageurl6 = response.items[5].item.images.information;
  $('#image_item_5').attr('src', imageurl6);

  imageurl7 = response.items[6].item.images.information;
  $('#image_item_6').attr('src', imageurl7);

  imageurl8 = response.items[7].item.images.information;
  $('#image_item_7').attr('src', imageurl8);
  console.log(response)
});