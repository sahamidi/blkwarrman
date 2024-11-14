// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Warranty {
    struct WarrantyInfo {
        address owner;
        uint256 startDate;
        uint256 endDate;
        string productSerialNumber;
        bool isActive;
    }

    mapping(uint256 => WarrantyInfo) public warranties;
    uint256 public warrantyCount;

    event WarrantyCreated(uint256 warrantyId, address owner, uint256 startDate, uint256 endDate, string productSerialNumber);
    event WarrantyTransferred(uint256 warrantyId, address newOwner);
    event WarrantyVoid(uint256 warrantyId);

    // Create a new warranty
    function createWarranty(uint256 startDate, uint256 endDate, string memory productSerialNumber) public {
        require(endDate > startDate, "End date must be after start date");

        warrantyCount++;
        warranties[warrantyCount] = WarrantyInfo({
            owner: msg.sender,
            startDate: startDate,
            endDate: endDate,
            productSerialNumber: productSerialNumber,
            isActive: true
        });

        emit WarrantyCreated(warrantyCount, msg.sender, startDate, endDate, productSerialNumber);
    }

    // Transfer a warranty to a new owner
    function transferWarranty(uint256 warrantyId, address newOwner) public {
        require(warranties[warrantyId].owner == msg.sender, "You must own the warranty to transfer it");
        warranties[warrantyId].owner = newOwner;

        emit WarrantyTransferred(warrantyId, newOwner);
    }

    // Void a warranty
    function voidWarranty(uint256 warrantyId) public {
        require(warranties[warrantyId].owner == msg.sender, "You must own the warranty to void it");
        warranties[warrantyId].isActive = false;

        emit WarrantyVoid(warrantyId);
    }

    // Check if a warranty is active and valid
    function isWarrantyValid(uint256 warrantyId) public view returns (bool) {
        WarrantyInfo memory warranty = warranties[warrantyId];
        return warranty.isActive && block.timestamp <= warranty.endDate;
    }
}
