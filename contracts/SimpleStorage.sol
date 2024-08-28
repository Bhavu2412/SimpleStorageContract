// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract SimpleStorage {
    // int256 public age = -25;
    // string public name = "Bhavya";
    // address public add = 0xC2FeBC7bA8d7f03018b05A1b54B3049cB2240b5E;
    // bool public isQualified = false;
    uint public favNum;

    struct Person {
        uint favNum;
        string name;
    }

    Person public p = Person({name: "Bhavya", favNum: 12});
    Person[] public people;

    mapping(string => uint) public peopleMapping;

    function changeFav(uint num) public virtual {
        favNum = num;
        favNum += 1;
    }

    function addPerson(string memory name1, uint favNum1) public {
        Person memory newP = Person({name: name1, favNum: favNum1});
        people.push(newP);
        peopleMapping[name1] = favNum1;
        // people.push(Person(favNum1,name1));
    }

    function retrive() public view returns (uint) {
        return favNum;
    }
}
