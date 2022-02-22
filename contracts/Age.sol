pragma solidity ^0.8.0;

//SPDX-License-Identifier: Unlicense

contract ages {
    uint private age = 23;
    
    

    function getAge() external view returns(uint) {
        return age;
    }

    function setAge(uint _age) external payable {
    age = _age;
    }


    function checkBalance() external view returns(uint) {
        return address(this).balance;
    }

    /*fallback() external payable {

    }*/
}