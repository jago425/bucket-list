curl --include --request POST "http://localhost:4741/list_items" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "list_item": {
      "item_description": "'"${ITEM_DESCRIPTION}"'",
      "done": "'"${DONE}"'"
    }
  }'

  echo
