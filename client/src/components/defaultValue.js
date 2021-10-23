export const defaultValue = {
  python: `print("Hello World!")`,
  c: `#include <stdio.h>
    int main(void) 
    {
        printf("Hello World!\\n");
        return 0;
    }`,
  "c++": `#include <iostream>
    using namespace std;
    
    int main() {
        cout << "Hello World!";
        return 0;
    }`,
  "c#": `using System;
    using System.Collections.Generic;
    using System.Linq;
    
    class MainClass {
        static void Main() {
            Console.WriteLine("Hello World!");
        }
    }`,
  java: `class Main {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }`,
  javascript: `console.log("Hello World!");`,
  assembly: `section .data
    msg db "Hello World!", 0ah

section .text
    global _start
_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 13
    syscall
    mov rax, 60
    mov rdi, 0
    syscall`,
};
