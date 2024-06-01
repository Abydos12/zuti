// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs::File;
use std::io::prelude::*;

#[tauri::command]
fn get_zerotier_service_token() -> Result<String, String> {
    let mut file = File::open("C:\\Users\\Kosch\\AppData\\Local\\ZeroTier\\authtoken.secret")
        .map_err(|e| e.to_string())?;
    let mut token = String::new();
    file.read_to_string(&mut token).map_err(|e| e.to_string())?;
    Ok(token)
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![get_zerotier_service_token])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
