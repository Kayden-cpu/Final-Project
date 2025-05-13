//
//  AppView.swift
//  Finals IOS App
//
//  Created by Kayden Davis on 5/13/25.
//

import SwiftUI

struct AppView: View {
    var body: some View {
        VStack {
            
            ZStack {
                Color(.blue)
                    .ignoresSafeArea()
                    .frame(height: 100)
                Text("Simply the Gathering")
                    .foregroundStyle(Color.white)
                    .font(.system(size: 30))
            }
            
            
            
            
            
            
            
            Spacer()
            Color(.blue)
                .ignoresSafeArea()
                .frame(height: 60)
        }
    }
}

#Preview {
    AppView()
}
