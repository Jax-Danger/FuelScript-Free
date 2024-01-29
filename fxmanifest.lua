fx_version 'cerulean'
games { 'gta5' }

author 'JaxDanger'
description 'Advanced Fuel Script for FiveM using Typescript and React'
version '0.0'

client_script 'packages/resource/dist/client.js'

server_script 'packages/resource/dist/server.js'

files {
  'packages/ui/dist/index.html',
  'packages/ui/dist/*',
  'packages/ui/dist/**/*',
  'packages/ui/dist/**/**/*',
}

ui_page 'packages/ui/dist/index.html'
