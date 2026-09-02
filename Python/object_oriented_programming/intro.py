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
    bedrooms=3
    bathrooms=2
    floors =1
    area=120
    owner=""
    location=""
    architect="KIMANI"

    def config(self,owner,location):
        self.owner=owner
        self.location=location

    def print_self(self):
        #this <the object itself>: self<object >
        print(self)
        print(self.__dict__) #dictionary <print all properties>

#When access object properties use dot notation
#Bracket notation is for dictionary
#→ method . config →
#→ print self
lydia_house=House()
# lydia_house.owner="Lydia"
# lydia_house.location="Kikiyu"
lydia_house.config(owner="Lydia",location="Kikiyu")
print(f"Lydias House Owner {lydia_house.owner}")
print(f"Lydias Location {lydia_house.location}")
print(f"Lydias House Bedrooms {lydia_house.bedrooms}")
print(f"Lydias House Bedrooms {lydia_house.bathrooms}")
print(f"Lydias House Bedrooms {lydia_house.floors}")
print(f"Lydias House Bedrooms {lydia_house.area}")
print(f"Lydias House Designer {lydia_house.architect}")
print(f"Printing lydias house")
lydia_house.print_self()
print("End of print lydias")


daniel_house=House()
# daniel_house.owner="Daniel"
# daniel_house.location="Muranga"
daniel_house.config(owner="Daniel",location="Muranga")
print(f"Daniels House Owner {daniel_house.owner}")
print(f"Daniels Location {daniel_house.location}")
print(f"Daniels House Bedrooms {daniel_house.bedrooms}")
print(f"Daniels House Bathroom {daniel_house.bathrooms}")
print(f"Daniels House Floors {daniel_house.floors}")
print(f"Daniels House area {daniel_house.area}")
print(f"Daniels House Designer{daniel_house.architect}")
print(f"Printing daniels house")
daniel_house.print_self()
print("End of print lydias")