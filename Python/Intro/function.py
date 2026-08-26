def area_circle(radius):
    ans=3.142*pow(radius,2)
    print(f"for circle of raduis{radius} area is {ans}")
    return
area_circle(20)
new_f=area_circle
new_f(10)


def check_age(age):
    if age>=18:
        return("adult")
    else:
        return("minor")
        results=check_age(27)
        print(results)

def print_numbers():
    for number in range(1, 6):
        print(number)

