"""
Object oriented programming.
<JS ,Python ,C++ ,JAVA , etc>
——————————————————————————————
Concept in programming to make
work easy. by using principles.
1.Encapsulation
    -keeping data and methods<functions> inside a class
    while restricting direct access to internal data.
2.Abstraction
    -Hiding uncessary complexity or implrtation of details.
3.Inheritance
    -one class to reuse or extend propertie
     and methods of another class
4.Polymorphisim
    -appering in different forms. Method can
    have different behaviours.
——————————————————————————————

JS and python are object oriented.
→ number.toString() ,string.toLowerCase()
"""

"""
→ Class →
 -blueprint for an object.◇

→ Class could an architectural drawing of a house.
    object → implentaiton of the drawing.
"""
#is to have the name Capitalized
#fields <properties>
class House:
    bedrooms = 3
    bathrooms = 2
    floors = 1
    area = 120
    owner = ""
    location = ""
    architect = "KIMANI"

    # js constructor
    def _init_(self, owner, location):
        print("Class house created. initializer called")
        self.owner = owner
        self.location = location

    def config(self, owner, location):
        print("Config method has run")
        self.owner = owner
        self.location = location

    def print_self(self):
        # this object itself: self<object>
        print(self)
        print(self._dict_)  # dictionary <print all properties>


# When access object properties use dot notation
# Bracket notation is for dictionary

# -> method . config ->
# -> print self
# Instance class -> create an object from a class

lydia_house = House(owner="lydia", location="Kikuyu")
# lydia_house._init_()
# lydia_house.owner="lydia"
# lydia_house.location="Kikuyu"
# lydia_house.config(owner="lydia", location="Kikuyu")

print(f"lydias House Owner {lydia_house.owner}")
print(f"lydias Location {lydia_house.location}")
print(f"lydias House Bedrooms {lydia_house.bedrooms}")
print(f"lydias House Bathrooms {lydia_house.bathrooms}")
print(f"lydias House Floors {lydia_house.floors}")
print(f"lydias House area {lydia_house.area}")
print(f"lydias House Designer {lydia_house.architect}")
print(f"Printing lydias house")
lydia_house.print_self()
print("End of print lydias")


moses_house = House(owner="moses", location="Muranga")  # _init_ ()
# moses_house.owner="moses"
# moses_house.location="Muranga"
# moses_house.config(owner="moses", location="Muranga")

print(f"mosess House Owner {moses_house.owner}")
print(f"mosess Location {moses_house.location}")
print(f"mosess House Bedrooms {moses_house.bedrooms}")
print(f"mosess House Bathroom {moses_house.bathrooms}")
print(f"mosess House Floors {moses_house.floors}")
print(f"mosess House area {moses_house.area}")
print(f"mosess House Designer {moses_house.architect}")
print(f"Printing mosess house")
moses_house.print_self()
print("End of print lydias")