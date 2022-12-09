#!/bin/bash

hugo --destination "./docs" && git add . && git commit -m "deploy" && git push