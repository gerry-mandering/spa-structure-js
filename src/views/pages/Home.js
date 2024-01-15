import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async render() {
        return `
            <main class="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 relative">
                <div class="absolute top-3 right-3 w-32 z-10">
                    <div class="flex justify-between items-center bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md">
                        <span class="text-gray-800 dark:text-gray-200">Language</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="h-4 w-4 text-gray-800 dark:text-gray-200">
                            <path d="M12 5v14"></path>
                            <path d="m19 12-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div class="mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
                        <div><a class="block px-4 py-2 text-gray-800 dark:text-gray-200" href="#">English</a></div>
                        <div><a class="block px-4 py-2 text-gray-800 dark:text-gray-200" href="#">Korean</a></div>
                        <div><a class="block px-4 py-2 text-gray-800 dark:text-gray-200" href="#">Chinese</a></div>
                    </div>
                </div>
                <div>
                    <div class="w-full flex justify-center items-center p-4"><h1 class="text-4xl font-bold dark:text-white">Choose
                        Your Pong Game Mode</h1>
                    </div>
                    <div class="flex flex-row gap-8 mt-8">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-48" data-v0-t="card">
                            <div class="flex flex-col items-center justify-center p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     class="h-12 w-12 mb-4">
                                    <line x1="6" x2="10" y1="12" y2="12"></line>
                                    <line x1="8" x2="8" y1="10" y2="14"></line>
                                    <line x1="15" x2="15.01" y1="13" y2="13"></line>
                                    <line x1="18" x2="18.01" y1="11" y2="11"></line>
                                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                </svg>
                                <h3 class="tracking-tight text-2xl font-bold mb-2">1 VS 1</h3>
                                <button id="modal-button" class="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition">
   Click to Open modal
</button>

<div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

        <div class="flex justify-end p-2">
            <button type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>

        <div class="p-6 pt-0 text-center">
            <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this user?</h3>
            <a href="#"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                Yes, I'm sure
            </a>
            <a href="#"
                class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                data-modal-toggle="delete-user-modal">
                No, cancel
            </a>
        </div>

    </div>
</div>
                                <p class="text-sm text-muted-foreground text-center">Play 1 vs 1 game of Pong</p><a
                                    class="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="/game">
                                Play
                            </a>
                            </div>
                        </div>
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-48" data-v0-t="card">
                            <div class="flex flex-col items-center justify-center p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     class="h-12 w-12 mb-4">
                                    <line x1="6" x2="10" y1="12" y2="12"></line>
                                    <line x1="8" x2="8" y1="10" y2="14"></line>
                                    <line x1="15" x2="15.01" y1="13" y2="13"></line>
                                    <line x1="18" x2="18.01" y1="11" y2="11"></line>
                                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                </svg>
                                <h3 class="tracking-tight text-2xl font-bold mb-2">2 VS 2</h3>
                                <p class="text-sm text-muted-foreground text-center">Play 2 vs 2 game of Pong</p><a
                                    class="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="/game">
                                Play
                            </a>
                            </div>
                        </div>
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-48" data-v0-t="card">
                            <div class="flex flex-col items-center justify-center p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     class="h-12 w-12 mb-4">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                    <path d="M4 22h16"></path>
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                </svg>
                                <h3 class="tracking-tight text-2xl font-bold mb-2">Tournament</h3>
                                <p class="text-sm text-muted-foreground text-center">Compete in a Pong tournament</p><a
                                    class="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="/game">
                                Play
                            </a>
                            </div>
                        </div>
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-48" data-v0-t="card">
                            <div class="flex flex-col items-center justify-center p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     class="h-12 w-12 mb-4">
                                    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path>
                                    <path d="m13 12-3 5h4l-3 5"></path>
                                </svg>
                                <h3 class="tracking-tight text-2xl font-bold mb-2">AI</h3>
                                <p class="text-sm text-muted-foreground text-center">Human vs AI Please beat the Machine!</p><a
                                    class="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="/game">
                                Play
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        `;
    }

    // Close all modals when press ESC
    async after_render() {
        window.openModal = function(modalId) {
            document.getElementById(modalId).style.display = 'block'
            document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
        }

        window.closeModal = function(modalId) {
            document.getElementById(modalId).style.display = 'none'
            document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
        }

        document.getElementById("modal-button").addEventListener ("click",  () => {
            console.log("clicked");
            openModal('modelConfirm');
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal('modelConfirm');
            }
        });
    }

}