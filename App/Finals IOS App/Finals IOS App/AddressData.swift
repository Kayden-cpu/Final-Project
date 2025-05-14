//
//  AddressData.swift
//  Finals IOS App
//
//  Created by Kayden Davis on 5/14/25.
//

import Foundation

struct Address: CustomStringConvertible {
    var street: String
    var city: String
    var state: String
    var zip: String
    var country: String

    var description: String {
        return "\(street), \(city), \(state) \(zip), \(country)"
    }
}

