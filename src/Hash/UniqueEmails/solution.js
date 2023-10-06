// link: https://leetcode.com/problems/unique-email-addresses/

var numUniqueEmails = function (emails) {
  // because we only care about whether they are unique, we can use a set
  const set = new Set();

  // loop through the emails array and apply the rules.
  // we can first split the string with the @ symbol to get the local name and domain name
  // we can then split the local name with the '.' symbol and join the array back together to remove all periods
  // split the localname again with the + symbol and only take the first element from the array
  // add the localname and domain name into the set
  for (let i = 0; i < emails.length; i++) {
    const arr = emails[i].split("@");
    let localName = arr[0].split(".").join("");
    localName = localName.split("+")[0];
    set.add(`${localName}@${arr[1]}`);
  }
  // once we have gone through the entire array, we just return the size of the set
  return set.size;
};

module.exports = numUniqueEmails;
