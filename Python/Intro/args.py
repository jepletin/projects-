#Tuple
#

def my_args(*args):
    print(f"Args type of args{type(args)}")
    print(args)
    print(f"first arg {args[0]}")
    print("——————————————")

#a=30 ,b
my_args(30,67,97,100)
my_args("Hello",True,34)

def area_rectangle(length,width):
    area=length*width
    print("——————————————")
    print(f"For rectnagle with length {length} and Width {width} are is {area}")
    print("——————————————")

area_rectangle(20,10)

#function to sum numbers
def sum(a,b):
    ans=a+b

def sum2(*args):
    #tuppple
    ans=0
    for n in args:
        print(f"n is {n}")
        ans=ans+n
    print(f"Sum is {ans}")

sum2(29,49,34,40,69,98)


def args_kwargs(*args,**kwargs):
    print("——————————————")
    print("All args",args)
    print("All kwargs",kwargs)
    print("——————————————")

#Error
#args_kwargs(a=2,b=30,45,39)
args_kwargs(45,39,a=2,b=30,)