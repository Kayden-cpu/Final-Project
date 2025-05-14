//
//  AddressView.swift
//  Finals IOS App
//
//  Created by Kayden Davis on 5/13/25.
//

import SwiftUI

struct AddressView: View {
    @State var address = Address(street: "", city: "", state: "", zip: "", country: "")
    var body: some View {
        ZStack {
           
            
            Color.blue
                .clipShape(RoundedRectangle(cornerRadius: 30))
                .frame(height: 110)
                .frame(width: 350)
            Text("\(Address(street: "Street", city: "City", state: "State", zip: "Zip", country: "Country"))")
                .foregroundStyle(Color.white)
                .font(.system(size: 19))
            
        }
    }
}

#Preview {
    AddressView()
}
