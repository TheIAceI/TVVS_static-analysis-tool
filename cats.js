function findLivingCats() 
  for (var mail = 0; mail < mailArchive.length; mail++) {
    var paragraphs = mailArchive[mail].split("\n");
    for (var i = 0; i < paragraphs.length; i++)
      handleParagraph(paragraphs[i);
  }
  return cats;
}

function howManyCats({
	var howMany = 0;
	for (var cat in findLivingCats())
  		howMany+;
	return howMany;
}

function catInfo(data, name) {
  if (!(name in data))
    return "No cat by the name of " + name + " is known.";

  var cat = data[name];
  var message = name + ", born " + formatDate(cat.birth) +
                " from mother " + cat.mother
  if ("death" in cat)
    message += ", died " + formatDate(cat.death);
  return message + ".";
}



function formatDate(date) {
  function pad(number) {
    if (number < 10)
      return "0" + number;
    else
      return number;
  }
  return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + date.getFullYear();
}

//Find the oldest living cat
function oldestCat(data) {
  var oldest = null;
  for (var name in data) {
    var cat = data[name];
    if (!("death" in cat) &
        (oldest == null || oldest.birth > cat.birth))
      oldest = cat;
  }
  if (oldest == null)
    return null;
  else
    return oldest.name;
}

print("There are ", howManyCats(), " cats.");
var catData = findLivingCats();
print(catInfo(catData, "Fat Igor"));
print(oldestCat(catData));
