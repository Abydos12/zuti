// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env::consts::OS;
use std::fs::File;
use std::io::prelude::*;
use std::path::{Path, PathBuf};

use directories::UserDirs;

#[tauri::command]
fn get_zerotier_service_token() -> Result<String, String> {
    let path = get_token_path().map_err(|e| e.to_string())?;
    let mut file = File::open(path).map_err(|e| e.to_string())?;
    let mut token = String::new();
    file.read_to_string(&mut token).map_err(|e| e.to_string())?;
    Ok(token)
}

fn get_token_path() -> Result<PathBuf, String> {
    let home: &Path;
    if let Some(user_dirs) = UserDirs::new() {
        home = user_dirs.home_dir();
        return match OS {
            "windows" => Ok(home.join("AppData\\Local\\ZeroTier\\authtoken.secret")),
            "linux" => Ok(Path::new("/var/lib/zerotier-one/authtoken.secret").into()),
            "macos" => Ok(home.join("Library/Application Support/ZeroTier/authtoken.secret")),
            _ => Err("OS not supported".into()),
        };
    } else {
        panic!("Home dir not found");
    }
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![get_zerotier_service_token])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
