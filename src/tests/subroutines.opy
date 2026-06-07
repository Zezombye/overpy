#!optimizeForSize

subroutine foo
subroutine bar 1
subroutine sub_with_wait_nested

def foo():
    @Name "my subroutine"
    
    A++
    bar()
    async(Sub0, AsyncBehavior.NOOP)
    async(sub_with_wait_nested, AsyncBehavior.NOOP)
    async(sub_with_wait_nested, AsyncBehavior.RESTART) #should throw warning

def bar():
    pass

def Sub0():
    B++


def sub_with_wait():
    A = 2
    wait()

def sub_with_wait_nested():
    A = 3
    sub_with_wait()
