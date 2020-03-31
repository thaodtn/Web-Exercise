/*
 * Implement all your JavaScript in this file!
 */

var operator_1 = 0;
var operator_2 = 0;

var addTask = false;
var subtractTask = false;
var multiplyTask = false;
var divideTask = false;

var result = 0;

var newOperation = true;
var endOperation = false; //= true sau khi thực hiện phép tính (phím '=')
var value = "0";

var debug_str = "";




function numberButtonHandler(e)
{
    var buttonValue = $(this).val();
    var i = 0;
    //kiểm tra button là số hay phép toán trước khi đưa vào mảng giá trị
    //nếu không phải là số thì thoát
    if ((buttonValue < "0") || (buttonValue > "9")) return;
    //nếu bắt đầu phép tính mới thì xoá value
    if (endOperation == true)
    {
        value = "";
        operator_1 = 0;
        newOperation = true;
        endOperation = false;
    }
    value += buttonValue;

    $('#display').prop("disabled", false);
    $('#display').val(value);
    $('#display').prop("disabled", true);

    $('#output').html(value); //debug
}

function addButtonHandler()
{
    if ((newOperation == true) && (addTask == false))
    {
        operator_1 = value; //lấy trá trị số đang hiện trên màn hình
        value = "";
    }
    else
    {
        equalsButtonHandler();
        endOperation = false;
        operator_1 = result;
        value = "";
    }
    addTask = true;
    //debug
    $('#output').html("operator_1 = " + operator_1 + "\n" +
                    "operator_2 = " + operator_2 + "\n" +
                    "result = " + result);
}

function subtractButtonHandler()
{
    if ((newOperation == true) && (addTask == false))
    {
        operator_1 = value; //lấy giá trị số đang hiện trên màn hình là số bị trừ
        value ="";
    }
    else
    {
        equalsButtonHandler();
        endOperation = false;
        operator_1 = result;
        value = "";
    }
    subtractTask = true;
}

function multiplyButtonHandler()
{
    if ((newOperation == true) && (addTask == false))
    {
        operator_1 = value; //lấy giá trị số đang hiện trên màn hình
        value = "";
    }
    else
    {
        equalsButtonHandler();
        endOperation = false;
        operator_1 = result;
        value = "";
    }
    multiplyTask = true;
}

function divideButtonHandler()
{
    if ((newOperation == true) && (addTask == false))
    {
        operator_1 = value; //lấy giá trị số đang hiện trên màn hình
        value = "";
    }
    else
    {
        equalsButtonHandler();
        endOperation = false;
        operator_1 = result;
        value = "";
    }
    divideTask = true;
}

function equalsButtonHandler()
{
    if (value == "") value = "0";
    if (addTask == true)
    {
        addTask = false;
        operator_2 = value; //lấy trá trị số đang hiện trên màn hình trước khi cộng
        result = parseInt(operator_1) + parseInt(operator_2);
    }
    else if (subtractTask == true)
    {
        subtractTask = false;
        operator_2 = value; //lấy giá trị số đang hiện trên màn hình là số trừ
        result = parseInt(operator_1) - parseInt(operator_2);
    }
    else if (multiplyTask == true)
    {
        multiplyTask = false;
        operator_2 = value; //lấy giá trị số đang hiển thị trên màn hình trước khi nhân
        result = parseInt(operator_1) * parseInt(operator_2);
    }
    else if (divideTask == true)
    {
        divideTask = false;
        operator_2 = value; //lấy giá trị số đang hiển thị trên màn hình là số chia
        result = parseInt(operator_1) / parseInt(operator_2);
    }
    else 
    {
        return false;
    }
    newOperation = false;
    endOperation = true;
    //hiển thị kết quả lên màn hình
    $('#display').prop("disabled", false);
    $('#display').val(result);
    $('#display').prop("disabled", true);


    
}

// During or after any of the cases above, if the user clicks the clear button, then the app should reset itself back to the state in which the page was just loaded. It should not reload the page, of course, but rather should clear the display and “forget” the results of prior inputs or operations. 
function clearButtonHandler()
{
    operator_1 = 0;
    operator_2 = 0;
    value = "0";
    result = 0;
    addTask = false;
    subtractTask = false;
    multiplyTask = false;
    divideTask = false;
    newOperation = true;
    endOperation = false;
    $('#display').prop("disabled", false);
    $('#display').val("");
    $('#display').prop("disabled", true);
}

$('button').click(numberButtonHandler);
$('#addButton').click(addButtonHandler);
$('#subtractButton').click(subtractButtonHandler);
$('#multiplyButton').click(multiplyButtonHandler);
$('#divideButton').click(divideButtonHandler);
$('#equalsButton').click(equalsButtonHandler);
$('#clearButton').click(clearButtonHandler);