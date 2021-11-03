#!/usr/bin/env bash

cd frontend && npm run build && cd dist && caddy file-server