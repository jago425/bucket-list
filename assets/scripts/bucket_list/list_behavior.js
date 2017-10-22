$(document).ready(function () {
  let counter

  $('#addrow').on('click', function () {
    const newRow = $('<tr>')
    let cols = ''

    cols += '<td><input type="text" class="form-control" name="list_Item[item_description]' + counter + '"/></td>'
    cols += '<td><input type="text" class="form-control" name="list_Item[done]' + counter + '"/></td>'
    cols += '<td><input type="button" class="ibtnDel btn btn-md btn-success "  value="Edit"></td>'

    cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>'
    newRow.append(cols)
    $('table.order-list').append(newRow)
    counter++
  })

  $('table.order-list').on('click', '.ibtnDel', function (event) {
    $(this).closest('tr').remove()
    counter -= 1
  })
})
